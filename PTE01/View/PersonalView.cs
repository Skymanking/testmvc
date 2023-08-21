using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Model.View
{
    public class PerProfile
    {
        public string MaNV { get; set; }
        public string Name { get; set; }
        public string Position { get; set; }
        public string Birthday { get; set; }
        public string TaxCode { get; set; }
        public string CMND { get; set; }
        public string BHXHCode { get; set; }
        public string GroupID2 { get; set; }
        public string StartDate { get; set; }
        public string Specialize { get; set; }
        public string AcademicLevel { get; set; }
        public double? AllowedYear { get; set; }
        public string Image { get; set; }
    }
    public class Personal1
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public string GroupName { get; set; }
        public bool Status { get; set; }
        public string Position { get; set; }
        public string CMND { get; set; }
        public long? IDRecuiment { get; set; }
        public DateTime? StartDate { get; set; }
    }
    public class Personal2
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public string GroupName { get; set; }
        public DateTime? BirthDay { get; set; }
        public DateTime? StartDate { get; set; }
        public string Position { get; set; }
    }
    public class Personal3
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public string GroupName { get; set; }
        public string GroupID2 { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndTryDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Position { get; set; }
    }
    public class Personal5
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public string GroupName { get; set; }
        public DateTime? EndHDLDDate { get; set; }
        public string Position { get; set; }
    }
    public class Personal6
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public DateTime? StartDate { get; set; }
        public bool Status { get; set; }
        public bool haveHDLD { get; set; }
        public DateTime? EndDate { get; set; }
    }
    public class Personal7
    {
        public string ID { get; set; }
        public long GroupID { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
     public class Personal8
    {
        public long GroupID { get; set; }
        public string GroupName { get; set; }
        public string UserID { get; set; }
        public string UserName { get; set; }
        public string FullName { get; set; }
        public string Image { get; set; }
        public int value1 { get; set; }
        public int value2 { get; set; }
        public int value3 { get; set; }
        public int value4 { get; set; }
        public int value5 { get; set; }
        public int value6 { get; set; }
    }
     public class Personal9
     {
         public string ID { get; set; }
         public string Name { get; set; }
         public string GroupName { get; set; }
         public bool Status { get; set; }

     }
    public class Personal4
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public string GroupName { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndTryDate { get; set; }
        public string Position { get; set; }
    }
    public class HumanResource
    {
        public IEnumerable<Personal3>  HumanNow { get; set; }
        public IEnumerable<Personal3>  HumanStart { get; set; }
        public IEnumerable<Personal3>  HumanEnd { get; set; }
        public HumanResource (IEnumerable<Personal3> now,IEnumerable<Personal3> start,IEnumerable<Personal3> end)
        {
            HumanNow = now;
            HumanEnd = end;
            HumanStart = start;
        }
        public HumanResource()
        {
            HumanNow = null;
            HumanEnd = null;
            HumanStart = null;
        }
    }
    public class PersonalAll
    {
        public string ID { get; set; }
        public string HoTen { get; set; }
        public long IDBoPhan { get; set; }
        public string BoPhan { get; set; }
        public string BoPhanCha { get; set; }
        public string NhomPL { get; set; }
        public bool TinhTrang { get; set; }
        public bool? GioiTinh { get; set; }
        public DateTime? NgaySinh { get; set; }
        public string SoCMND { get; set; }
        public string ChucVu { get; set; }
        public string TrinhDo { get; set; }
        public DateTime? NgayVaoLam { get; set; }
        public DateTime? NgayCap { get; set; }
        public DateTime? NgayChinhThuc { get; set; }
        public DateTime? NgayNghiViec { get; set; }
        public string DiaChi { get; set; }
        public string DienThoai { get; set; }
        public string SoBHXH { get; set; }
        public string NoiCap { get; set; }
        public string MaSoThue { get; set; }
        public string NghiCheDo { get; set; }
        public bool OnlyYear { get; set; }
    }
    public class PersonalToolView
    {
        public string PersonalName { get; set; }
        public string IDIte { get; set; }
        public string IDPer { get; set; }
        public string ItemName { get; set; }
        public string Note { get; set; }
        public int Quantity { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string GroupName { get; set; }
    }
    public class PersonalToolView2
    {
        public long ID { get; set; }
        public string IDIte { get; set; }
        public string IDPer { get; set; }
        public string ItemName { get; set; }
        public string Note { get; set; }
        public int Quantity { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string PerName { get; set; }
        public bool PerStatus { get; set; }

    }
}
