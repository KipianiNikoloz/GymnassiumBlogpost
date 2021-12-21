using System.Linq;
using Core.Entities.Base;
using Core.Specifications.Base;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure
{
    public static class SpecificationEvaluator<T> where T: BaseEntity
    {
        public static IQueryable<T> ApplySpecification(IQueryable<T> source, ISpecification<T> specification)
        {
            var query = source;

            if (specification.Criteria != null)
            {
                query = query.Where(specification.Criteria);
            }

            if (specification.OrderBy != null)
            {
                query = query.OrderBy(specification.OrderBy);
            }

            if (specification.OrderByDescending != null)
            {
                query = query.OrderByDescending(specification.OrderByDescending);
            }

            if (specification.IsPagingEnabled)
            {
                query = query.Skip(specification.Skip).Take(specification.Take);
            }

            query = specification.Includes.Aggregate(query, (current, include) => current.Include(include));

            return query;
        }
    }
}