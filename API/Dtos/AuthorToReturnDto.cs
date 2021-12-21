using System;

namespace API.Dtos
{
    public class AuthorToReturnDto
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public DateTime Birthday { get; set; }
        public string ImageUrl { get; set; }
    }
}