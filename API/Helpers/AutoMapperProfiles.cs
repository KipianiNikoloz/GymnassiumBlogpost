using API.Dtos;
using AutoMapper;
using Core.Entities;

namespace API.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Story, StoryToReturnDto>()
                .ForMember(opt => opt.Author, 
                    opt 
                        => opt.MapFrom(x => x.Author.FullName));
            
            CreateMap<StoryDto, Story>();
            
            CreateMap<Author, AuthorToReturnWithStoriesDto>();
            
            CreateMap<Author, AuthorToReturnDto>();

            CreateMap<AuthorDto, Author>();
        }
    }
}