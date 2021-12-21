using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Base;
using Core.Specifications.Base;

namespace Core.Interfaces
{
    public interface IGenericRepository<T> where T: BaseEntity
    {
        Task<IReadOnlyList<T>> Get();
        Task<T> GetItem(int id);
        Task AddItem(T item);
        void UpdateItem(T item);
        void DeleteItem(T item);
        IQueryable<T> ApplySpecification(ISpecification<T> spec);
        Task<T> GetEntityWithSpec(ISpecification<T> spec);
        Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec);
        Task<int> CountAsync(ISpecification<T> spec);
    }
}