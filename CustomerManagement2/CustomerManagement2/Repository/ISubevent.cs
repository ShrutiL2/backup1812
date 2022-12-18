using CustomerManagement2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerManagement2.Repository
{
    public interface ISubevent
    {
        Task<List<Subevent>> GetSubevents();

        Task<List<Subevent>> GetByEventId(int id);

        Task<Subevent> GetById(int id);

        Task<int> AddSubevent(Subevent subevent);
    }
}
