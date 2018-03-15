package com.niit.Dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.niit.model.User;

@Repository
@Transactional
public class FriendDaoImpl implements FriendDao {
	@Autowired
	private SessionFactory sessionFactory;

	public List<User> suggestedUsers(String email) {

		Session session = sessionFactory.getCurrentSession();
		String queryString = "select * from user_s10250 where email in"
				+ "(select email from user_s180250 where email!=? " + "minus"
				+ "(select toId_email from friend where fromId_email=? "
				+ "(union select fromId_email from friend where toId_email=? ))";
		SQLQuery query = session.createSQLQuery(queryString);
		query.setString(0, email);
		query.setString(1, email);
		query.setString(2, email);
		query.addEntity(User.class);
		List<User> suggestedUsers = query.list();

		return suggestedUsers;
	}

}
