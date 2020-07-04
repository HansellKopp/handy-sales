<?php

namespace App\Exceptions;

use Exception;
use App\Traits\ApiResponser;
use Illuminate\Database\QueryException;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Exceptions\ThrottleRequestsException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use \Illuminate\Database\Eloquent\ModelNotFoundException as ModelNotFoundException;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    use ApiResponser;
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        if($exception instanceof ValidationException)
        {
            $errors = $exception->validator->getMessageBag();
            return $this->errorResponse($errors, 422);
        }
        if($exception instanceof AuthenticationException)
        {
            return $this->errorResponse('Unauthenticated', 401);
        }
        if($exception instanceof AuthorizationException)
        {
            return $this->errorResponse('no authorization for these action', 403);
        }
        if ($exception instanceof ModelNotFoundException) 
        {
            $model = strtolower(class_basename($exception->getModel()));
            return $this->errorResponse("{$model} instance not found", 404);
        }
        if($exception instanceof MethodNotAllowedHttpException)
        {
            return $this->errorResponse('request method not allowed', 405);
        }
        if ($exception instanceof NotFoundHttpException)
        {
            return $this->errorResponse("url not found", 404);
        }
        if ($exception instanceof ThrottleRequestsException) {
            return $this->errorResponse("Too many requests", 429);
        }        
        if($exception instanceof HttpException)
        {
            return $this->errorResponse($exception->getMessage(), $exception->getStatusCode());
        }
        if($exception instanceof QueryException)
        {
            dd($exception);
        }
        dd($exception);
        return $this->errorResponse('Unexpected Exception. Try later', 500);
        //return parent::render($request, $exception);

    }
}
