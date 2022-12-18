using System;
using System.Collections.Generic;

namespace CustomerManagement2.Models
{
    public partial class Dependancy
    {
        public int Deptid { get; set; }
        public int? Custid { get; set; }
        public int? Eventid { get; set; }
        public int? Subeventid { get; set; }
        public string Remarks { get; set; }

        public Customer Cust { get; set; }
        public Eventdetails Event { get; set; }
        public Subevent Subevent { get; set; }
    }
}
