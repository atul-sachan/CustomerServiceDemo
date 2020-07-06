using CustomerService.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerService.Api.Repository
{
    public interface IStatesRepository
    {
        Task<List<State>> GetStatesAsync();
    }
}
