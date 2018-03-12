package com.niit.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="Blogcomment")
public class BlogComment {
	private int id;
	private BlogPost blogPost;
	private User CommentBy;
	private String CommentTxt;
	private Date CommentedOn;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public BlogPost getBlogPost() {
		return blogPost;
	}
	public void setBlogPost(BlogPost blogPost) {
		this.blogPost = blogPost;
	}
	public User getCommentBy() {
		return CommentBy;
	}
	public void setCommentBy(User commentBy) {
		CommentBy = commentBy;
	}
	public String getCommentTxt() {
		return CommentTxt;
	}
	public void setCommentTxt(String commentTxt) {
		CommentTxt = commentTxt;
	}
	public Date getCommentedOn() {
		return CommentedOn;
	}
	public void setCommentedOn(Date commentedOn) {
		CommentedOn = commentedOn;
	}

}
