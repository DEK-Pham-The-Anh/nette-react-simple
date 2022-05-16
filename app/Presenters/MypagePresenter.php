<?php

declare(strict_types=1);

namespace App\Presenters;

use Nette;


final class MypagePresenter extends Nette\Application\UI\Presenter
{
    public function renderDefault(): void
    {
        $this->template->data = json_encode(
            array(
                'user' => array(
                    'name' => 'Joe',
                    'surname' => 'Doe',
                    'jobtitle' => 'Web developer',
                ),
            ),
        );
    }
}
