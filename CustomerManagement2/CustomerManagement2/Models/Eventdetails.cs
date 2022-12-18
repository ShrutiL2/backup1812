using System;
using System.Collections.Generic;

namespace CustomerManagement2.Models
{
    public partial class Eventdetails
    {
        public Eventdetails()
        {
            Dependancy = new HashSet<Dependancy>();
            Subevent = new HashSet<Subevent>();
        }

        public int Eventid { get; set; }
        public string Eventname { get; set; }
        public string Eventimage { get; set; }

        public ICollection<Dependancy> Dependancy { get; set; }
        public ICollection<Subevent> Subevent { get; set; }
    }
}
