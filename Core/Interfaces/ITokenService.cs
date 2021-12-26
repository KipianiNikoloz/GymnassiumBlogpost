using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface ITokenService
    {
        public Task<string> CreateToken(AppUser user);
    }
}