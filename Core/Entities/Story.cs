using System;
using Core.Entities.Base;

namespace Core.Entities
{
    public class Story: BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public DateTime PublishDate { get; set; }

        public int AuthorId { get; set; }
        public Author Author { get; set; }
    }
}