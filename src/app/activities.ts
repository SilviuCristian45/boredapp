export interface Activity {
    activity:      string;
    type:          string;
    participants:  number;
    price:         number;
    link:          string;
    key:           string;
    accessibility: number;
}

export const defaultActivities = [
    {
        "activity": "Learn a new recipe",
        "type": "cooking",
        "participants": 1,
        "price": 0,
        "link": "",
        "key": "6553978",
        "accessibility": 0.05
    },
    {
        "activity": "Learn a new foreign language",
        "type": "education",
        "participants": 1,
        "price": 0,
        "link": "",
        "key": "1221",
        "accessibility": 0.09
    },
]