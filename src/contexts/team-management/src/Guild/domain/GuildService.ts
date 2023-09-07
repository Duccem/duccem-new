import { Member } from "../../Member/domain/Member";
import { Guild } from "./Guild";

export interface GuildService {
  registerGuild(guild: Guild, admin: Member): Promise<void>;
}
