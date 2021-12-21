using System;
using System.Collections.Generic;
using Core.Entities;

namespace API.Dtos
{
    public class AuthorToReturnWithStoriesDto
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public DateTime Birthday { get; set; }
        public string ImageUrl { get; set; }

        public ICollection<StoryToReturnDto> Stories { get; set; }
    }
}