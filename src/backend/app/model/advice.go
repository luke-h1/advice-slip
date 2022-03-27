package model

import "time"

type Advice struct {
	ID        uint64    `json:"id"`
	Title     string    `json:"title"`
	Content   string    `json:"content"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func GetAllAdvice() ([]Advice, error) {
	var advices []Advice

	query := `SELECT id, title, content, created_at, updated_at FROM advice;`

	rows, err := db.Query(query)

	if err != nil {
		return advices, err
	}

	defer rows.Close()

	for rows.Next() {
		var advice Advice

		err := rows.Scan(&advice.ID, &advice.Title, &advice.Content, &advice.CreatedAt, &advice.UpdatedAt)

		if err != nil {
			return advices, err
		}
		advices = append(advices, advice)
	}
	return advices, nil
}
