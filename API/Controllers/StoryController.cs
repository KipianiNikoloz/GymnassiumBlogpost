using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Controllers.Base;
using API.Dtos;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class StoryController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public StoryController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<Pagination<StoryToReturnDto>>> GetStories([FromQuery] StoryParams storyParams)
        {
            var spec = new StoriesWithAuthorFilterSpecification(storyParams);
            
            var items = await _unitOfWork.StoryRepository.ListAsync(spec);

            var countSpec = new StoryWithFiltersCountSpec(storyParams);

            var count = await _unitOfWork.StoryRepository.CountAsync(countSpec);

            var itemsToReturn = _mapper.Map<IReadOnlyList<Story>, IReadOnlyList<StoryToReturnDto>>(items);

            var pagedResult = new Pagination<StoryToReturnDto>(storyParams.PageIndex, storyParams.PageSize, count, itemsToReturn);

            return Ok(pagedResult);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<StoryToReturnDto>> GetStory(int id)
        {
            var spec = new StoriesWithAuthorFilterSpecification(id);

            var story = await _unitOfWork.StoryRepository.GetEntityWithSpec(spec);

            if(story != null) return Ok(_mapper.Map<StoryToReturnDto>(story));

            return BadRequest();
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult> AddStory([FromBody] StoryDto item)
        {
            item.PublishDate = DateTime.UtcNow;
            
            var story = _mapper.Map<Story>(item);

            await _unitOfWork.StoryRepository.AddItem(story);

            if (_unitOfWork.HasChanges())
            {
                var response = await _unitOfWork.SaveChanges();

                if(response) return Ok();
            };

            return BadRequest();
        }

        [Authorize]
        [HttpPut]
        public async Task<ActionResult> UpdateStory([FromBody] StoryDto item, string name)
        {
            var spec = new StoriesWithAuthorFilterSpecification(name);
            
            var storyToUpdate = await _unitOfWork.StoryRepository.GetEntityWithSpec(spec);

            if (storyToUpdate != null) _mapper.Map(item, storyToUpdate);
            
            _unitOfWork.StoryRepository.UpdateItem(storyToUpdate);

            if (_unitOfWork.HasChanges())
            {
                var res = await _unitOfWork.SaveChanges();

                if(res) return Ok();
            }

            return BadRequest();
        }

        [Authorize]
        [HttpDelete("{name}")]
        public async Task<ActionResult> DeleteStory(string name)
        {
            var spec = new StoriesWithAuthorFilterSpecification(name);

            var storyToDelete = await _unitOfWork.StoryRepository.GetEntityWithSpec(spec);
            
            if(storyToDelete != null) _unitOfWork.StoryRepository.DeleteItem(storyToDelete);

            if (_unitOfWork.HasChanges())
            {
               var res = await _unitOfWork.SaveChanges();

               if (res) return Ok();
            }

            return BadRequest();
        }
    }
}