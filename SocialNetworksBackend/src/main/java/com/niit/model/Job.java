package com.niit.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "job_s180250")
public class Job {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO )
	private int id;
	@Column(nullable = false)
	private String jobtitle;
	private String joDescription;
	@Column(nullable = false)
	private String SkillsRequired;
	private String location;
	private String YrsOfExp;
	private String CompanyName;
	private String Salary;
    private Date PostedOn;
	public Date getPostedOn() {
		return PostedOn;
	}

	public void setPostedOn(Date postedOn) {
		PostedOn = postedOn;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getJobtitle() {
		return jobtitle;
	}

	public void setJobtitle(String jobtitle) {
		this.jobtitle = jobtitle;
	}

	public String getJoDescription() {
		return joDescription;
	}

	public void setJoDescription(String joDescription) {
		this.joDescription = joDescription;
	}

	public String getSkillsRequired() {
		return SkillsRequired;
	}

	public void setSkillsRequired(String skillsRequired) {
		SkillsRequired = skillsRequired;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getYrsOfExp() {
		return YrsOfExp;
	}

	public void setYrsOfExp(String yrsOfExp) {
		YrsOfExp = yrsOfExp;
	}

	public String getCompanyName() {
		return CompanyName;
	}

	public void setCompanyName(String companyName) {
		CompanyName = companyName;
	}

	public String getSalary() {
		return Salary;
	}

	public void setSalary(String salary) {
		Salary = salary;
	}

}
