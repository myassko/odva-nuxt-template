import { useToast } from '~/components/ui-kit/toast';

/**
 *	Функция, которая запускает уведомление.
 *
 *	Первым параметром принимает текст ошибки, а вторым - его вариант (default, destructive). (можно добавить еще варианты, если потребуется)
 */
export default function (error, type)
{
	const { toast } = useToast();

	toast({
		title: error,
		variant: type,
	});
}
