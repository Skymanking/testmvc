using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Model.Dao;

namespace Model.View
{
    public class TaskView1
    {
        public long ID { get; set; }
        public string CreateBy { get; set; }
        public string ImageC { get; set; }
        public DateTime? CreateDate { get; set; }
        public string Subject { get; set; }
        public DateTime? FinishDate { get; set; }
        public bool? Finish { get; set; }
        public string Owner { get; set; }
        public string ImageO { get; set; }
        public DateTime Deadline { get; set; }
        public bool? Refuse { get; set; }
        public bool? Canceled { get; set; }
        public bool? Paused { get; set; }
        public long? Status { get; set; }
        public int Rate { get; set; }
        public string Description { get; set; }
        public int Imqualified { get; set; }
        public int Proportion { get; set; }
        public long? LinkID { get; set; }
    }
    public class TaskFullBPView1
    {
        public List<TaskView1> listTask { get; set; }
        public List<Personal8> listPer { get; set; }
        public TaskFullBPView1(List<TaskView1> ftask, List<Model.View.Personal8> fper)
        {
            listTask = ftask;
            listPer = fper;
        }
        public TaskFullBPView1()
        {
            listTask = null;
            listPer = null;
        }

    }
    public class TaskView4
    {
        public long ID { get; set; }
        public string CreateBy { get; set; }
        public string ImageC { get; set; }
        public DateTime CreateDate { get; set; }
        public string Subject { get; set; }
        public DateTime? FinishDate { get; set; }
        public bool? Finish { get; set; }
        public string Owner { get; set; }
        public string ImageO { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime Deadline { get; set; }
        public bool? Refuse { get; set; }
        public bool? Paused { get; set; }
        public bool? Canceled { get; set; }
        public long? IDPro { get; set; }
        public long? IDPar { get; set; }
        public long? IDKey { get; set; }
        public int Rate { get; set; }
        public long? Status { get; set; }
        public int Imqualified { get; set; }
    }


    public class TaskView3
    {
        public long ID { get; set; }
        public string CreateBy { get; set; }
        public DateTime CreateDate { get; set; }
        public string Subject { get; set; }
        public DateTime? FinishDate { get; set; }
        public bool? Finish { get; set; }
        public string Owner { get; set; }
        public DateTime Deadline { get; set; }
        public bool? Refuse { get; set; }
        public bool? Canceled { get; set; }
        public int Rate { get; set; }
    }
    public class TaskView2
    {
        public long ID { get; set; }
        public string CreateBy { get; set; }
        public string Subject { get; set; }
        public DateTime? FinishDate { get; set; }
        public bool? Finish { get; set; }
        public string Owner { get; set; }
        public DateTime Deadline { get; set; }
        public string Description { get; set; }
        public string Note { get; set; }
        public int Rate { get; set; }
        public long? Status { get; set; }
        public bool? Refuse { get; set; }
        public bool? Canceled { get; set; }

    }
    public class TaskView5
    {
        public long ID { get; set; }
        public long? LinkID { get; set; }
        public string CreateBy { get; set; }
        public string Subject { get; set; }
        public bool? Finish { get; set; }
        public string Owner { get; set; }
        public DateTime Deadline { get; set; }


    }

}
