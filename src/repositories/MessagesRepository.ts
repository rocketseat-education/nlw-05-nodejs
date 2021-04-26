import { EntityRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";

@EntityRepository(Message)
class MessagesRepository extends Repository<Message> {}

export { MessagesRepository };
