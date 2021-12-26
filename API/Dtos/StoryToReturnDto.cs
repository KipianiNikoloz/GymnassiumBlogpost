using System;

namespace API.Dtos
{
    public class StoryToReturnDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public DateTime PublishDate { get; set; }
        public string Author { get; set; }
    }
}