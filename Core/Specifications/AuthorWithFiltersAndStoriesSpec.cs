using System;
using Core.Entities;
using Core.Specifications.Base;

namespace Core.Specifications
{
    public class AuthorWithFiltersAndStoriesSpec: BaseSpecification<Author>
    {
        public AuthorWithFiltersAndStoriesSpec(AuthorParams authorParams): base
        (
            x 
                => (string.IsNullOrEmpty(authorParams.Search) || x.FullName.ToLower().Contains(authorParams.Search.ToLower()))
        )
        {
            AddPaging(authorParams.PageSize, (authorParams.PageSize * (authorParams.PageIndex - 1)));
            AddInclude(x => x.Stories);
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

        public AuthorWithFiltersAndStoriesSpec(int id): base(x => x.Id == id)
        {
            AddInclude(x => x.Stories);
        }

        public AuthorWithFiltersAndStoriesSpec(string name): base(x => x.FullName.ToLower() == name.ToLower())
        {
            AddInclude(x => x.Stories);
        }
    }
}