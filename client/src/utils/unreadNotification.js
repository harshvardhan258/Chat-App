export const unReadNotificationFunc = (notifications) => {
  return notifications.filter((n) => n.isRead === false);
};
