package model

import (
	"fmt"
	"time"
)

type Advice struct {
	ID        uint64    `json:"id"`
	Title     string    `json:"title"`
	Content   string    `json:"content"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
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

func GetAdvice(id uint64) (Advice, error) {
	var advice Advice

	query := `SELECT id, title, content, created_at, updated_at FROM advice WHERE id=$1;`

	row, err := db.Query(query, id)

	if err != nil {
		return advice, err
	}

	defer row.Close()

	if row.Next() {
		err := row.Scan(&advice.ID, &advice.Title, &advice.Content, &advice.CreatedAt, &advice.UpdatedAt)

		if err != nil {
			return advice, err
		}

		advice = Advice{
			ID:        advice.ID,
			Title:     advice.Title,
			Content:   advice.Content,
			CreatedAt: advice.CreatedAt,
			UpdatedAt: advice.UpdatedAt,
		}
	}
	return advice, nil
}

func CreateAdvice(advice Advice) error {
	query := `INSERT INTO advice (title, content) VALUES ($1, $2) RETURNING id, title, content, created_at, updated_at;`

	_, err := db.Exec(query, advice.Title, advice.Content)

	if err != nil {
		return err
	}
	return nil
}

func UpdateAdvice(advice Advice, id uint64) error {

	query := `UPDATE advice SET title=$1, content=$2 WHERE id = $3;`

	result, err := db.Exec(query, advice.Title, advice.Content, id)
	fmt.Println(result)

	if err != nil {
		return err
	}
	return nil
}

func DeleteAdvice(id uint64) error {
	query := `DELETE FROM advice WHERE id=$1;`

	_, err := db.Exec(query, id)

	if err != nil {
		return err
	}
	return nil
}
