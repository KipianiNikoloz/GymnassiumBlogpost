using System;
using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class AuthorDto
    {
        [Required] public string FullName { get; set; }
        [Required] public DateTime Birthday { get; set; }
        [Required] public string ImageUrl { get; set; }
    }
}