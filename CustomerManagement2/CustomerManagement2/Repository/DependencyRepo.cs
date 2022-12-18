using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerManagement2.Models;
using Microsoft.EntityFrameworkCore;

namespace CustomerManagement2.Repository
{
    public class DependencyRepo : IDependancy
    {
        private readonly customermanagementContext _context;

        public DependencyRepo(customermanagementContext context)
        {
            this._context = context;
        }

        public async Task<int> AddNew(Dependancy dependancy)
        {
            _context.Dependancy.Add(dependancy);
            int res = await _context.SaveChangesAsync();
            if (res > 0)
            {
                return 1;
            }
            return 0;
            //throw new NotImplementedException();
        }

       

        public async Task<Dependancy> GetById(int id)
        {
            var ar = _context.Dependancy.Where(x => x.Deptid == id).FirstOrDefaultAsync();
            return await ar;
           // throw new NotImplementedException();
        }

        public async Task<List<Dependancy>> GetDependancies()
        {
            var arr = _context.Dependancy.ToListAsync();
            return await arr;
            //throw new NotImplementedException();
        }

        public async Task<List<Dependancy>> GetByCustId(int custid)
        {
            var ar = _context.Dependancy.Where(x => x.Custid == custid).ToListAsync();
            return await ar;
            //throw new NotImplementedException();
        }

        public async Task<Dependancy> DeleteDependancy(int depid)
        {
            var ar = await _context.Dependancy.Where(x => x.Deptid == depid).FirstOrDefaultAsync();
            if (ar != null)
            {
                _context.Dependancy.Remove(ar);
                await _context.SaveChangesAsync();
                return ar;
            }
            else
            {
                return null;
            }
           
            //throw new NotImplementedException();
        }
    }
}
