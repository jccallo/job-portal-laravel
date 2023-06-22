<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Application>
 */
class ApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'job_id' => fake()->randomElement([1, 2, 3, 4, 5]),
            'user_id' => fake()->randomElement([1, 2, 3, 4, 5]),
            'archivo_cv' => fake()->uuid().".pdf",
            'mensaje' => fake()->sentence(),
        ];
    }
}
