using System;

namespace API.Dtos
{
    public class AuthorDto
    {
        public string FullName { get; set; }
        public DateTime Birthday { get; set; }
        public string ImageUrl { get; set; }
    }
}