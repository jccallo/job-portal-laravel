<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Applicant>
 */
class ApplicantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => fake()->unique()->randomElement([1, 2, 3, 4, 5]),
            'tipo_documento' => fake()->randomElement(["dni", "pasaporte"]),
            'numero_documento' => fake()->unique()->randomNumber(8, true),
            'nombres' => fake()->firstName(),
            'apellidos' => fake()->lastName(),
            'fecha_nacimiento' => fake()->date(),
            'rol' => fake()->randomElement(["administrador", "postulante"]),
        ];
    }
}
