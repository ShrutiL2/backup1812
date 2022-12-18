using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CustomerManagement2.Models
{
    public partial class customermanagementContext : DbContext
    {
        public customermanagementContext()
        {
        }

        public customermanagementContext(DbContextOptions<customermanagementContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<Dependancy> Dependancy { get; set; }
        public virtual DbSet<Eventdetails> Eventdetails { get; set; }
        public virtual DbSet<Subevent> Subevent { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                //optionsBuilder.UseSqlServer("Server=10.3.117.39;Database=customermanagement;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.Custid);

                entity.ToTable("customer");

                entity.Property(e => e.Custid).HasColumnName("custid");

                entity.Property(e => e.Address)
                    .HasColumnName("address")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Age).HasColumnName("age");

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .HasColumnName("gender")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasColumnName("password")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Phone)
                    .HasColumnName("phone")
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .HasColumnName("username")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Dependancy>(entity =>
            {
                entity.HasKey(e => e.Deptid);

                entity.ToTable("dependancy");

                entity.Property(e => e.Deptid).HasColumnName("deptid");

                entity.Property(e => e.Custid).HasColumnName("custid");

                entity.Property(e => e.Eventid).HasColumnName("eventid");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Subeventid).HasColumnName("subeventid");

                entity.HasOne(d => d.Cust)
                    .WithMany(p => p.Dependancy)
                    .HasForeignKey(d => d.Custid)
                    .HasConstraintName("FK__dependanc__custi__2A4B4B5E");

                entity.HasOne(d => d.Event)
                    .WithMany(p => p.Dependancy)
                    .HasForeignKey(d => d.Eventid)
                    .HasConstraintName("FK__dependanc__event__2B3F6F97");

                entity.HasOne(d => d.Subevent)
                    .WithMany(p => p.Dependancy)
                    .HasForeignKey(d => d.Subeventid)
                    .HasConstraintName("FK__dependanc__subev__2C3393D0");
            });

            modelBuilder.Entity<Eventdetails>(entity =>
            {
                entity.HasKey(e => e.Eventid);

                entity.ToTable("eventdetails");

                entity.Property(e => e.Eventid).HasColumnName("eventid");

                entity.Property(e => e.Eventimage)
                    .HasColumnName("eventimage")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.Eventname)
                    .HasColumnName("eventname")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Subevent>(entity =>
            {
                entity.ToTable("subevent");

                entity.Property(e => e.Subeventid).HasColumnName("subeventid");

                entity.Property(e => e.Budget).HasColumnName("budget");

                entity.Property(e => e.Details)
                    .HasColumnName("details")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Eventid).HasColumnName("eventid");

                entity.Property(e => e.Subeventimage)
                    .HasColumnName("subeventimage")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Subeventname)
                    .HasColumnName("subeventname")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Event)
                    .WithMany(p => p.Subevent)
                    .HasForeignKey(d => d.Eventid)
                    .HasConstraintName("FK__subevent__eventi__276EDEB3");
            });
        }
    }
}
