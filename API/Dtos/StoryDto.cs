using System;

namespace API.Dtos
{
    public class StoryDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        
        public DateTime PublishDate { get; set; }

        public int AuthorId { get; set; }
    }
}