using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerManagement2.Models;
using Microsoft.EntityFrameworkCore;

namespace CustomerManagement2.Repository
{
    public class SubeventRepo : ISubevent
    {
        private readonly customermanagementContext _context;
        public SubeventRepo(customermanagementContext context)
        {
            this._context = context;
        }

        public async Task<int> AddSubevent(Subevent subevent)
        {
            _context.Subevent.Add(subevent);
            int res = await _context.SaveChangesAsync();
            if (res > 0)
            {
                return 1;
            }
            return 0;
            //throw new NotImplementedException();
        }

        public async Task<List<Subevent>> GetByEventId(int id)
        {
            var ar = _context.Subevent.Where(x => x.Eventid == id).ToListAsync();
            return await ar;
            //throw new NotImplementedException();
        }

        public async Task<Subevent> GetById(int id)
        {
            var ar = _context.Subevent.Where(x => x.Subeventid == id).FirstOrDefaultAsync();
            return await ar;
            //throw new NotImplementedException();
        }

        public async Task<List<Subevent>> GetSubevents()
        {
            var arr = _context.Subevent.ToListAsync();
            return await arr;
            //throw new NotImplementedException();
        }
    }
}
