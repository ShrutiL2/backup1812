using System;
using System.Collections.Generic;

namespace CustomerManagement2.Models
{
    public partial class Subevent
    {
        public Subevent()
        {
            Dependancy = new HashSet<Dependancy>();
        }

        public int Subeventid { get; set; }
        public int? Eventid { get; set; }
        public string Subeventname { get; set; }
        public string Details { get; set; }
        public int? Budget { get; set; }
        public string Subeventimage { get; set; }

        public Eventdetails Event { get; set; }
        public ICollection<Dependancy> Dependancy { get; set; }
    }
}
