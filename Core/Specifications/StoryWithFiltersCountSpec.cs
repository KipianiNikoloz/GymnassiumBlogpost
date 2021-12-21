using Core.Entities;
using Core.Specifications.Base;

namespace Core.Specifications
{
    public class StoryWithFiltersCountSpec: BaseSpecification<Story>
    {
        public StoryWithFiltersCountSpec(StoryParams pars) : base
        (x =>
            (string.IsNullOrEmpty(pars.Search) || x.Name.ToLower().Contains(pars.Search.ToLower()))
        )
        {
            
        }
    }
}