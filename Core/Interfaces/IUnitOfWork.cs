using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IUnitOfWork
    {
        IGenericRepository<Author> AuthorRepository { get; }
        IGenericRepository<Story> StoryRepository { get; }
        bool HasChanges();
        Task<bool> SaveChanges();
    }
}