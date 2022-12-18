using CustomerManagement2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerManagement2.Repository
{
    public interface IEvent
    {
        Task<List<Eventdetails>> GetAllEvent();

        Task<Eventdetails> GetById(int id);

        

        Task<Eventdetails> GetByName(string name);

        Task<int> AddEvent(Eventdetails eventdetails);
    }
}
