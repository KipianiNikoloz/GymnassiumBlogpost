using Core.Entities;
using Core.Specifications.Base;

namespace Core.Specifications
{
    public class AuthorWithFiltersCount: BaseSpecification<Author>
    {
        public AuthorWithFiltersCount(AuthorParams authorParams): base
        (x => 
            (string.IsNullOrEmpty(authorParams.Search) || x.FullName.ToLower().Contains(authorParams.Search.ToLower()))
        )
        {
        }
    }
}