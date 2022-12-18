using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerManagement2.Models;
using Microsoft.EntityFrameworkCore;

namespace CustomerManagement2.Repository
{
    public class EventRepo : IEvent
    {
        private readonly customermanagementContext _context;
        public EventRepo(customermanagementContext context)
        {
            this._context = context;
        }

        public async Task<int> AddEvent(Eventdetails eventdetails)
        {
            _context.Eventdetails.Add(eventdetails);
            int res = await _context.SaveChangesAsync();
            if(res >0)
            {
                return 1;
            }
            return 0;
            //throw new NotImplementedException();
        }

        public async Task<List<Eventdetails>> GetAllEvent()
        {
            var arr =  _context.Eventdetails.ToListAsync();
            return await arr;
            //throw new NotImplementedException();
        }

        public async Task<Eventdetails> GetById(int id)
        {
            var ar = _context.Eventdetails.Where(x => x.Eventid == id).FirstOrDefaultAsync();
            return await ar;
            //throw new NotImplementedException();
        }

        public async Task<Eventdetails> GetByName(string name)
        {
            var ar = _context.Eventdetails.Where(x => x.Eventname == name).FirstOrDefaultAsync();
            return await ar;
            //throw new NotImplementedException();
        }


    }
}
