export const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);

    const formattedDate = date.toLocaleDateString("en-US", {
        weekday: "short", // Mon
        month: "short",   // Aug
        day: "numeric",   // 29
    });

    const formattedTime = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return [formattedDate, formattedTime];
};
