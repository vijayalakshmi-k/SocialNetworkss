package com.niit.Dao;

import java.util.List;

import com.niit.model.User;

public interface FriendDao {

	List<User> suggestedUsers(String email);
}
