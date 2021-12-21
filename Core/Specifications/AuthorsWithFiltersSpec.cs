using System;
using Core.Entities;
using Core.Specifications.Base;

namespace Core.Specifications
{
    public class AuthorsWithFiltersSpec: BaseSpecification<Author>
    {
        public AuthorsWithFiltersSpec(AuthorParams authorParams): base
        (
            x 
                => (string.IsNullOrEmpty(authorParams.Search) || x.FullName.ToLower().Contains(authorParams.Search.ToLower()))
        )
        {
            AddPaging(authorParams.PageSize, (authorParams.PageSize * (authorParams.PageIndex - 1)));
            AddOrderBy(x => x.FullName);
            
            if (!string.IsNullOrEmpty(authorParams.Sort))
            {
                switch (authorParams.Sort)
                {
                    case "dateAsc":
                        AddOrderBy(p => p.Birthday);
                        break;
                    case "dateDesc":
                        AddOrderByDescending(p => p.Birthday);
                        break;
                    default:
                        AddOrderBy(p => p.FullName);
                        break;
                }
            }
        }

        public AuthorsWithFiltersSpec(int id): base(x => x.Id == id)
        {
            
        }

        public AuthorsWithFiltersSpec(string name): base(x => x.FullName.ToLower() == name.ToLower())
        {
            
        }
    }
}