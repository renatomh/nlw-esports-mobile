import * as Notifications from 'expo-notifications';

export async function getPushNotificationToken() {
    /* Checking if user has authorized the use of notifications */
    const { granted } = await Notifications.getPermissionsAsync();

    /* If user hasn't allowed yet */
    if (!granted) {
        await Notifications.requestPermissionsAsync();
    }

    /* Otherwise, we'll get the push notification token */
    if (granted) {
        const pushToken = await Notifications.getExpoPushTokenAsync();
        console.log("NOTIFICATION TOKEN =>", pushToken.data);

        return pushToken.data;
    }
};
