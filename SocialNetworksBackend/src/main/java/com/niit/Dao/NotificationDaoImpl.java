package com.niit.Dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import com.niit.model.Notification;
@Transactional
@Repository
public class NotificationDaoImpl implements NotificationDao {
private SessionFactory sessionFactory;
		public List<Notification> getNotificationNotViewed(String email) {
Session session=sessionFactory.getCurrentSession();
		Query query =session.createQuery("from Notification where email=? and viewed=0");	
			
		List<Notification> notificationsNotViewed=query.list();
				return notificationsNotViewed;
	}
		
		public Notification getNotification(int id) {
			Session session=sessionFactory.getCurrentSession();
			Notification notification=(Notification)session.get(Notification.class, id);
           return notification;
		}
	
		public void updateNotification(int id) {
			Session session=sessionFactory.getCurrentSession();
			Notification notification=(Notification)session.get(Notification.class, id);
			notification.setViewed(true);
			notification.update(notification);
			
		}

}
