using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Base;
using Core.Interfaces;
using Core.Specifications;
using Core.Specifications.Base;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure
{
    public class GenericRepository<T>: IGenericRepository<T> where T: BaseEntity
    {
        private readonly DataContext _context;

        public GenericRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IReadOnlyList<T>> Get()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async Task<T> GetItem(int id)
        {
            return await _context.Set<T>().FindAsync(id);
        }

        public async Task AddItem(T item)
        {
            await _context.Set<T>().AddAsync(item);
        }

        public void UpdateItem(T item)
        {
            _context.Set<T>().Update(item);
        }

        public void DeleteItem(T item)
        {
            _context.Set<T>().Remove(item);
        }

        public IQueryable<T> ApplySpecification(ISpecification<T> spec)
        {
            return SpecificationEvaluator<T>.ApplySpecification(_context.Set<T>(), spec);
        }

        public async Task<T> GetEntityWithSpec(ISpecification<T> spec)
        {
            return await ApplySpecification(spec).FirstOrDefaultAsync();
        }

        public async Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec)
        {
            return await ApplySpecification(spec).ToListAsync();
        }

        public async Task<int> CountAsync(ISpecification<T> spec)
        {
            return await ApplySpecification(spec).CountAsync();
        }
    }
}