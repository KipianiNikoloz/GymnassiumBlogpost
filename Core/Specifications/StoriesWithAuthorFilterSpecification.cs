using System;
using System.Runtime.Intrinsics.X86;
using Core.Entities;
using Core.Specifications.Base;

namespace Core.Specifications
{
    public class StoriesWithAuthorFilterSpecification: BaseSpecification<Story>
    {
        public StoriesWithAuthorFilterSpecification(StoryParams pars): base
        ( x => 
            (string.IsNullOrEmpty(pars.Search) || x.Name.ToLower().Contains(pars.Search.ToLower()))
        )
        {
            AddPaging(pars.PageSize, (pars.PageIndex - 1) * pars.PageSize);
            AddInclude(x => x.Author);
            AddOrderBy(x => x.Name);
            
            if (!string.IsNullOrEmpty(pars.Sort))
            {
                switch (pars.Sort)
                {
                    case "dateAsc":
                        AddOrderBy(p => p.PublishDate);
                        break;
                    case "dateDesc":
                        AddOrderByDescending(p => p.PublishDate);
                        break;
                    default:
                        AddOrderBy(p => p.Name);
                        break;
                }
            }
        }

        public StoriesWithAuthorFilterSpecification(int id): base(x => x.Id == id)
        {
            AddInclude(s => s.Author);
        }

        public StoriesWithAuthorFilterSpecification(string name): base(x => x.Name.ToLower() == name.ToLower())
        {
            AddInclude(s => s.Author);
        }
    }
}