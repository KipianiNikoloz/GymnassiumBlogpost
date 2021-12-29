using System.Collections.Generic;
using System.Threading.Tasks;
using API.Controllers.Base;
using API.Dtos;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AuthorController: BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public AuthorController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet("included")]
        public async Task<ActionResult<Pagination<AuthorToReturnWithStoriesDto>>> GetAuthorsWithStories([FromQuery] AuthorParams authorParams)
        {
            var spec = new AuthorWithFiltersAndStoriesSpec(authorParams);

            var items = await _unitOfWork.AuthorRepository.ListAsync(spec);

            var countSpec = new AuthorWithFiltersCount(authorParams);

            var count = await _unitOfWork.AuthorRepository.CountAsync(countSpec);

            var itemsToReturn = _mapper.Map<IReadOnlyList<Author>, IReadOnlyList<AuthorToReturnWithStoriesDto>>(items);

            var pagedResult = new Pagination<AuthorToReturnWithStoriesDto>(authorParams.PageIndex, authorParams.PageSize, count, itemsToReturn);

            return Ok(pagedResult);
        }

        [HttpGet("included/{id}")]
        public async Task<ActionResult<AuthorToReturnWithStoriesDto>> GetAuthorWithStories(int id)
        {
            var spec = new AuthorWithFiltersAndStoriesSpec(id);

            var item = await _unitOfWork.AuthorRepository.GetEntityWithSpec(spec);

            var itemToReturn = _mapper.Map<Author, AuthorToReturnWithStoriesDto>(item);

            if(itemToReturn != null) return Ok(itemToReturn);

            return BadRequest();
        }

        [HttpGet]
        public async Task<ActionResult<Pagination<AuthorToReturnDto>>> GetAuthors([FromQuery] AuthorParams authorParams)
        {
            var spec = new AuthorWithFiltersAndStoriesSpec(authorParams);

            var items = await _unitOfWork.AuthorRepository.ListAsync(spec);

            var countSpec = new AuthorWithFiltersCount(authorParams);

            var count = await _unitOfWork.AuthorRepository.CountAsync(countSpec);

            var itemsToReturn = _mapper.Map<IReadOnlyList<Author>, IReadOnlyList<AuthorToReturnDto>>(items);

            var pagedResult = new Pagination<AuthorToReturnDto>(authorParams.PageIndex, authorParams.PageSize, count, itemsToReturn);

            return Ok(pagedResult);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AuthorToReturnDto>> GetAuthor(int id)
        {
            var spec = new AuthorWithFiltersAndStoriesSpec(id);

            var item = await _unitOfWork.AuthorRepository.GetEntityWithSpec(spec);

            var itemToReturn = _mapper.Map<Author, AuthorToReturnDto>(item);

            if(itemToReturn != null) return Ok(itemToReturn);

            return BadRequest();
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult> AddAuthor([FromBody] AuthorDto author)
        {
            var authorToPost = _mapper.Map<Author>(author);

            if (authorToPost != null) await _unitOfWork.AuthorRepository.AddItem(authorToPost);

            if (_unitOfWork.HasChanges())
            {
                var res = await _unitOfWork.SaveChanges();

                if (res) return Ok();
            }

            return BadRequest();
        }

        [Authorize]
        [HttpPut]
        public async Task<ActionResult> UpdateAuthor([FromBody] AuthorDto author, string name)
        {
            var spec = new AuthorsWithFiltersSpec(name);

            var authorToUpdate = await _unitOfWork.AuthorRepository.GetEntityWithSpec(spec);

            if (authorToUpdate != null) _mapper.Map(author, authorToUpdate);
            
            _unitOfWork.AuthorRepository.UpdateItem(authorToUpdate);

            if (_unitOfWork.HasChanges())
            {
                var res = await _unitOfWork.SaveChanges();

                if (res) return Ok();
            }

            return BadRequest();
        }

        [Authorize]
        [HttpDelete("{name}")]
        public async Task<ActionResult> DeleteAuthor(string name)
        {
            var spec = new AuthorsWithFiltersSpec(name);

            var author = await _unitOfWork.AuthorRepository.GetEntityWithSpec(spec);

            if (author != null) _unitOfWork.AuthorRepository.DeleteItem(author);

            if (_unitOfWork.HasChanges())
            {
                var res = await _unitOfWork.SaveChanges();

                if (res) return Ok();
            }

            return BadRequest();
        }
    }
}