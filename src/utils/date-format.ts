import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const getPublishedDateFormatted = (date: Date) => {
	return format(new Date(date), "d 'de' LLLL 'às' HH:mm'h'", {
		locale: ptBR,
	});
};

export const getPublishedDateRelativeToNow = (date: Date) => {
	return formatDistanceToNow(date, {
		locale: ptBR,
		addSuffix: true,
	});
};
