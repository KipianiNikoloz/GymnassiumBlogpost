using System;
using System.Collections;
using System.Collections.Generic;
using Core.Entities.Base;

namespace Core.Entities
{
    public class Author: BaseEntity
    {
        public string FullName { get; set; }
        public DateTime Birthday { get; set; }
        public string ImageUrl { get; set; }

        public ICollection<Story> Stories { get; set; }
    }
}