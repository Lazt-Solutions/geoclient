export const formatRelativeDate = (isoDate: string): [string, string] => {
    if (!isoDate) return ["", ""];
    const date = new Date(isoDate);
    if (isNaN(date.getTime())) return ["", ""];
    const now = new Date();

    // Normalize to midnight for day comparison
    const startOfToday = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );
    const startOfDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    );

    const diffMs = startOfDate.getTime() - startOfToday.getTime();
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

    let prefix = "";
    if (diffDays === 0) {
        prefix = "Today";
    } else if (diffDays === 1) {
        prefix = "Tomorrow";
    } else if (diffDays === -1) {
        prefix = "Yesterday";
    } else if (diffDays > 1) {
        prefix = `in ${diffDays} days`;
    } else {
        prefix = `${Math.abs(diffDays)} days ago`;
    }

    const formattedTime = date.toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    return [prefix, formattedTime];
};
