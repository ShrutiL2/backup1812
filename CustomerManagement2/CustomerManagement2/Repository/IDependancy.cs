using CustomerManagement2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerManagement2.Repository
{
    public interface IDependancy
    {
        Task<List<Dependancy>> GetDependancies();

        Task<Dependancy> GetById(int id);

        Task<List<Dependancy>> GetByCustId(int custid);

        Task<int> AddNew(Dependancy dependancy);

        Task<Dependancy> DeleteDependancy(int depid);
    }
}
