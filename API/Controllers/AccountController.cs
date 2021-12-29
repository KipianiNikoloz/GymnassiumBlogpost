using System.Threading.Tasks;
using API.Controllers.Base;
using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AccountController: BaseApiController
    {
        private readonly DataContext _context = default;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly UserManager<AppUser> _userManager;
        private readonly ITokenService _tokenService = default;
        private readonly IMapper _mapper;

        public AccountController(DataContext context, SignInManager<AppUser> signInManager, UserManager<AppUser> userManager, ITokenService tokenService, IMapper mapper)
        {
            _context = context;
            _signInManager = signInManager;
            _userManager = userManager;
            _tokenService = tokenService;
            _mapper = mapper;
        }
        
        [Authorize]
        [HttpPost("register")]
        public async Task<ActionResult<AdminDto>> Register(RegisterDto registerDto)
        {
            if (await IsTaken(registerDto.Username)) return BadRequest("Username is taken");
            
            var user = _mapper.Map<AppUser>(registerDto);

            user.UserName = user.UserName.ToLower();

            var result = await _userManager.CreateAsync(user, registerDto.Password);
            if (!result.Succeeded) return BadRequest("An error occured");

            result = await _userManager.AddToRoleAsync(user, "Admin");
            if (!result.Succeeded) return BadRequest(result.Errors);
            
            return new AdminDto()
            {
                Username = user.UserName,
                Token = await _tokenService.CreateToken(user),
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<AdminDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.Users
                .SingleOrDefaultAsync(u => u.UserName == loginDto.Username.ToLower());

            if (user == null) return Unauthorized("Username not found");

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);
            if (!result.Succeeded) return Unauthorized();
            
            return new AdminDto()
            {
                Username = user.UserName,
                Token = await _tokenService.CreateToken(user),
            };
        }

        private async Task<bool> IsTaken(string username)
        {
            return await _context.Users.AnyAsync(user => user.UserName == username.ToLower());
        }
    }
}